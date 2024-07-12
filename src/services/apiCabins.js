import supabase, { supabaseUrl } from "../supaBase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  //console.log(newCabin,id)
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  //create
  if (!id) query = query.insert({ ...newCabin, image: imagePath });
  //edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  if (hasImagePath) return data;

  const { error: strogeError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (strogeError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(strogeError);
    throw new Error(
      "cabin image could not be uploaded and Cabin was not be created"
    );
  }

  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}

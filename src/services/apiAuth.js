import supabase, { supabaseUrl } from "../supaBase";

export async function signup({fullName, email, password}) {
      const { data, error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                  data: {
                        fullName,
                        avatar:"",
                  }
            }
      })
   if(error) throw new Error(error.message);
   return data;
}


export async function login({email, password}){
      
const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if(error) throw new Error(error.message);
    console.log(data)
    return data;
}

export async function getCurrenrUser() {
      const { data: session} = await supabase.auth.getSession();
      if(!session.session) return null;

      const {data, error } = await supabase.auth.getUser();

      console.log(data);

      if(error) throw new Error(error.message);

      return data?.user;
}
export async function logout() {
      const {error} = await supabase.auth.signOut();
      if(error) throw new Error(error.message);
}

export async function updateCurrentUser({
      password, fullName, avatar }) {
      // 1.update password or fullname
      let updateData;

      if(password) updateData = { password};
      if (fullName) updateData = {data: {fullName}};

      const { data, error} = await supabase.auth.updateUser(updateData);
       if(error) throw new Error(error.message);
       if(!avatar) return data;
       //2. upload the avavetr image

       const fileName = `avatar-${data.user.id}-${Math.random()}`;

       const {error: storageError} = await supabase.storage.from("avtars").upload(fileName, avatar);

       if(storageError) throw new Error(storageError.message);

       //3. update avatar in user
      const {data: updateUser, error: error2} = await supabase.auth.updateUser({
            data: { avatar: `${supabaseUrl}/storage/v1/object/public/avtars/cabin-001.jpg/${fileName}`}
      })
      if(error2) throw new Error(error2.message);
      return updateUser;


}
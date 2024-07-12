// import Form from '../../ui/Form';
//import FormRow from '../../ui/FormRow';
// import Input from '../../ui/Input';
//import { useSetting } from './useSetting';
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useSetting } from "./useSetting";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useEditSetting";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
function UpdateSettingsForm() {
  const {
    isLoading,
    setting: {
      minBookinglength,
      maxBookingLength,
      maxGuestP,
      breackFastPrice,
    } = {},
  } = useSetting();
  const { isUpdating,updateSettings } = useUpdateSetting();
  if (isLoading) return <Spinner />;

  function handleUpdate(e,field){
    const {value} = e.target;
    if(!value) return;
    updateSettings({[field]:value })
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        Minimum nights/booking
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookinglength}
          disabled={isUpdating} onBlur={(e)=> handleUpdate(e, "minBookinglength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        Maximum nights/booking
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e)=> handleUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        Maximum guests/booking
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestP}
          disabled={isUpdating}
          onBlur={(e)=> handleUpdate(e, "maxGuestP")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        Breakfast price
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breackFastPrice}
          disabled={isUpdating}
          onBlur={(e)=> handleUpdate(e, "breackFastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

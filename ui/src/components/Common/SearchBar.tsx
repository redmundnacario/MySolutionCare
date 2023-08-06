import Input from "./Input";

export const SearchBar = ({
  handleChange
}: {
  handleChange: (event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}) => {
  return (
    <div className="bg-white">
      <Input label="Search" fieldName="search" onChange={handleChange} labelOff={true} isSearch={true} placeholder="Search clients..."/>
    </div>
  );
}
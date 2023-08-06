import Input from "./Input";

export const SearchBar = ({
  searchTerm,
  handleChange
}: {
  searchTerm: string | undefined;
  handleChange: (event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <Input label="Search" value={searchTerm ?? ""} fieldName="search" onChange={handleChange} labelOff={true} isSearch={true} placeholder="Search clients..."/>
    </div>
  );
}
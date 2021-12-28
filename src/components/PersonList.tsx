import { Person } from "./Person";
import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[];
}

export const PersonList = ({ names }: PersonListProps) => {
    return (
        <>
            {names.map(name => <Person key={name.firstName} name={name} />)}
        </>
    )
}

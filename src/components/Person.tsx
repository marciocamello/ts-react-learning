import { PersonProps } from "./Person.types"

export const Person = ({ name }: PersonProps) => {
    return (
        <div key={name.firstName}>{name.firstName} {name.lastName}</div>
    )
}

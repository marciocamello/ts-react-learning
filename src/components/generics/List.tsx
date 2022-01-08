import { AuthUser } from "../context/UserContext";

type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

export const List = <T extends AuthUser>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.name} {item.email}
                    </div>
                );
            })}
        </div>
    )
};
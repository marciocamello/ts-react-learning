type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}! You have ${messageCount} unread messages`
                    : 'Please sign in.'
                }
            </h2>
        </div>
    );
}
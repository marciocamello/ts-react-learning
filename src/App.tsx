import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';

import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

    const personName = {
        firstName: 'Marcio',
        lastName: 'Andre'
    }

    const nameList = [
        {
            firstName: 'Marcio',
            lastName: 'Andre'
        },
        {
            firstName: 'Marcio',
            lastName: 'Andre'
        },
        {
            firstName: 'Marcio',
            lastName: 'Andre'
        }
    ]

    return (
        <div className="App">
            <UserContextProvider>
                <User />
            </UserContextProvider>
            {/* <ThemeContextProvider>
                <Box />
            </ThemeContextProvider> */}

            {/* <Container styles={{
                border: '1px solid black',
                padding: '1rem',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Heading>Placeholder text</Heading>
                <Oscar>
                    <Heading>Oscar goes to Leonardo Dicaprio</Heading>
                </Oscar>
                <Status status="error" />
                <Greet
                    name="Marcio"
                    isLoggedIn={false}
                />
                <Button handleClick={(event, id) => console.log('Clicked', event, id)} />
                <Input value="Marcio" handleChange={(event) => console.log('Changed', event, event.target.value)} />

                <Person
                    name={personName}
                />
                <PersonList
                    names={nameList}
                />
            </Container> */}
        </div>
    );
}

export default App;

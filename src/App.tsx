import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Counter } from './components/class/Counter';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';

import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Text } from './components/polymorphic/Text';
import { MustableRef } from './components/ref/MustableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Status } from './components/Status';
import { Toast } from './components/templateliterals/Toast';

function App() {

    const personName = {
        id: 1,
        name: 'Marcio',
        email: 'email@test.com'
    }

    const nameList = [
        {
            id: 1,
            name: 'Marcio',
            email: 'email@test.com'
        },
        {
            id: 2,
            name: 'Rayane',
            email: 'email@test.com'
        },
        {
            id: 3,
            name: 'Luna',
            email: 'email@test.com'
        }
    ]

    return (
        <div className="App">
            <Text as="h1" size="lg">Heading</Text>
            <Text as="p" size="md">Paragraph</Text>
            <Text as="label" htmlFor='someId' size="sm" color="secondary">Label</Text>
            {/* <Toast position="center" /> */}
            {/* <CustomButton
                variant="primary"
            >
                Primary Button
            </CustomButton> */}
            {/* <RandomNumber
                value={10}
                isPositive
            /> */}
            {/* <List
                items={[
                    'Marcio',
                    'Andre',
                    'José'
                ]}
                onClick={(value) => console.log(value)}
            />
            <List
                items={[
                    1,
                    2,
                    3
                ]}
                onClick={(value) => console.log(value)}
            /> */}
            {/* <List
                items={nameList}
                onClick={(value) => console.log(value)}
            /> */}
            {/* <Private isLoggedIn={true} component={Profile} /> */}
            {/* <UserContextProvider>
                <User />
            </UserContextProvider> */}
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

export const HELLO_WORLD = 'HELLO_WORLD'; //1st way to pass action - passing just action name

export const helloWorld = () => {
    return { //2nd way - async way passsing action object - have to use middleware
        type: HELLO_WORLD
    }
}
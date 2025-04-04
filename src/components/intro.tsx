const Intro = ({ name1, name2 }: { name1: string; name2: string }) => {

    return (
        <p text-align: center className="Body">Hello! We are {name1} and {name2}. Welcome to our page about our hobbies!</p>
    );
}

export default Intro;
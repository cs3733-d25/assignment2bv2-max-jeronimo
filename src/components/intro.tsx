const Intro = ({ name1, name2 }: { name1: string; name2: string }) => {

    return (
        <p className="text-lg">Hello! We are {name1} and {name2}. Welcome to our page about our hobbies!</p>
    );
}

export default Intro;
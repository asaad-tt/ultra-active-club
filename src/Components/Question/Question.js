import React from 'react';

const Question = () => {
    return (
        <div className='question_section mt-10 p-20'>
            <h1 className="text-5xl text-center mb-10 text-amber-500 font-bold">Question and Answer</h1>
            <div className='first_question'>
                <h1 className="text-2xl font-bold mb-1">Q: How does react work?</h1>
                <p className="text-xl"><span className="font-bold mr-3">Ans:</span>
                    At its very core, React just maintains a tree for us  and it will do efficient diff computations on the nodes. our HTML code is pretty much a tree, or at least that's how our browser treats it. It constructs what is called the Document Object Model or DOM as it's often referred to. <br />

                    The HTML DOM is pretty much an interface (API) to modify the nodes in it. It contains different methods like getElementById or the new querySelector to target each node and we use JS to work with the DOM. This means whenever we want to change content, we are modifying the DOM but it's quite expensive. Why is quite expensive, that's the question. <br />
                    You know difference between Virtual DOM and Real DOM is that the first one is much faster. Well, it's kind of true… sort of. The V.DOM object actually has the same properties as a real DOM object, but the difference in speed comes because it doesn't affect anything on the screen. The V.DOM is just a representation of a DOM, but it's lightweight and detached from the browser-specific implementation details. It's easier to think of V.DOM as a blueprint for the real thing. <br />
                    Changing something in V.DOM vs changing something in the real DOM doesn't make much difference. The real difference is after that. When we are changing the real DOM in the browser, it will trigger layout and repaint, which takes extra resources and is very expensive. This means that we have to avoid touching the DOM, as much as we can and should only change something there, when absolutely sure it's the minimal course of actions.

                    Basically, what JS does right now is it goes through all the elements, and if it detects a change, it changes the whole element container.
                </p>
            </div>

            <div className='second_question mt-4'>
                <h1 className="text-2xl font-bold mb-1">Q: What is difference between state vs Prop ?</h1>

                <p className="text-xl"><span className="font-bold">Ans:</span>
                <span className="font-bold ml-2">state</span> <br />
                1. React state is mutable and its value can be changed as per requirment. <br />
                2. it is set by parent component. <br />
                3. State is local to a component and can not be used in other components.   <br />

                <span className="font-bold ml-2">Props</span> <br />
                1. Props are immutable , that is their content can not be changed once assigned . <br />
                2. props are set by event handlers that is they are completely managed by component itself. <br />
                3. Props allows Child Components to read values from parent components .  
                </p>
            </div>

            <div className='third_question mt-4'>
                <h1 className="text-2xl font-bold mb-1">Q: without data load what is the use of useEffect  ?</h1>
                <p className="text-xl"><span className="font-bold mr-3">Ans:</span>
                By using this Hook, we tell React that your component needs to do something after render. React will remember the function we passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </p>


            </div>
        </div>
    );
};

export default Question;
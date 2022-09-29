import React from 'react';

const Question = () => {
    return (
        <div className='question_section mt-10 p-10'>
            <h1 className="text-5xl text-center mb-10 text-amber-500 font-bold">Question and Answer</h1>
            <div className='first_question'>
                <h1 className="text-2xl font-bold mb-1">Q: How does react work?</h1>
                <p className="text-xl"><span className="font-semibold">Ans:</span>
                    At its very core, React just maintains a tree for us  and it will do efficient diff computations on the nodes. our HTML code is pretty much a tree, or at least that's how our browser treats it. It constructs what is called the Document Object Model or DOM as it's often referred to. <br />

                    The HTML DOM is pretty much an interface (API) to modify the nodes in it. It contains different methods like getElementById or the new querySelector to target each node and we use JS to work with the DOM. This means whenever we want to change content, we are modifying the DOM but it's quite expensive. Why is quite expensive, that's the question. <br />
                    You know difference between Virtual DOM and Real DOM is that the first one is much faster. Well, it's kind of true… sort of. The V.DOM object actually has the same properties as a real DOM object, but the difference in speed comes because it doesn't affect anything on the screen. The V.DOM is just a representation of a DOM, but it's lightweight and detached from the browser-specific implementation details. It's easier to think of V.DOM as a blueprint for the real thing. <br />
                    Changing something in V.DOM vs changing something in the real DOM doesn't make much difference. The real difference is after that. When we are changing the real DOM in the browser, it will trigger layout and repaint, which takes extra resources and is very expensive. This means that we have to avoid touching the DOM, as much as we can and should only change something there, when absolutely sure it's the minimal course of actions.

                    Basically, what JS does right now is it goes through all the elements, and if it detects a change, it changes the whole element container.
                </p>
            </div>

            <div className='second_question'>
                <h1 className="text-2xl font-bold mb-1">Q: How does react work?</h1>
                <p className="text-xl"><span className="font-semibold">Ans:</span>

                </p>
            </div>
        </div>
    );
};

export default Question;
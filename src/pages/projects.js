import React from "react";
import Matter from "matter-js";
import { useHistory } from 'react-router-dom';

class Projects extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};

  }


  componentDidMount() {

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: 'white'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);




    Composite.add(world, [
      Bodies.rectangle(400, 0, window.innerWidth, 0, { isStatic: true }),
      Bodies.rectangle(400, 550, window.innerWidth, 1, { isStatic: true }),
      Bodies.rectangle(950, 300, 1, window.innerHeight, { isStatic: true }),
      Bodies.rectangle(-150, 300, 1, window.innerHeight, { isStatic: true }),

      Bodies.circle(10, 10, 150, {
        render: {
             fillStyle: 'blue',
             strokeStyle: 'blue'
        }
    }),
    Bodies.circle(10, 10, 150, {
      render: {
           fillStyle: 'blue',
           strokeStyle: 'blue'
      }
  }),
  Bodies.circle(10, 10, 150, {
    render: {
         fillStyle: 'blue',
         strokeStyle: 'blue'
    }
}),
Bodies.circle(10, 10, 150, {
  render: {
       fillStyle: 'blue',
       strokeStyle: 'blue'
  }
}),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

  }

  render() {
    return <><div className='d-flex justify-content-between py-2 px-3 bg-transparent'><h1 className="red">PROJECTS</h1>  <h1 onClick={this.navigateToAbout} >ABOUT ME</h1>  </div><div ref="scene" >  </div></>;
  }
}
export default Projects;

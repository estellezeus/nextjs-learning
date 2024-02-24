import { useState } from 'react';

  export default function HomePage(){
        const names = ["Estelle", "Zeukeng", "Nguion"];
        const [likes, setLikes] = React.useState(0);

        function handleClick(){
          setLikes(likes + 1);
        }
        return (
          <div>
            <Header title="My first Prop" />
            <ul>
              {
                names.map((name) => (
                  <li key = {name} > {name}</li>
                ))
              }
            </ul>
            <button onClick={handleClick}>
              Like ({likes})
            </button>
          </div>
        )
      }

      function Header({title}){
        return(
          <h1>
            UI element in a component
            <h2>{title}</h2>
          </h1>
        
        );
      }
      root.render(<HomePage />);
    
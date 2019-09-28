import React from 'react';
import './styles.scss';

interface Client {
  name: string;
  image: string;
  width: string;
}

type P = {
  items: Client[];
};

function Clients(props: P) {
  return (
    <div className="columns is-centered is-multiline">
      {props.items.map((item, index) => {
        if (!item) return null;
        return (
          <div className="column is-narrow has-text-centered" key={index}>
            <div className="Clients__logo">
              <img src={item.image} width={item.width} alt={item.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Clients;

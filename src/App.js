import './app.css';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card">
      <img 
          src={imageUrl} alt="img"
          onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://shorturl.at/aiqsA';
          }}
      />
      <p>{description}</p>
    </div>
  );
};


const App = () =>{
  const items = [
    {
      imageUrl: 'https://shorturl.at/EHOW5', //correct url
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley `,
    },
    {
      imageUrl: 'ahttps://shorturl.at/EHOW5a',  //incorrect url
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley `,
    },
  ];

    return(
        <div className='app'>
            {items.map((item, index)=>
                <Card key={index} imageUrl={item?.imageUrl} description={item?.description} />
            )}
        </div>
    );
}

export default App;

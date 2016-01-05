import React from 'react';
import ReactDOM from 'react-dom';
import './images.css';

const Images = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Images</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <h2>Bad Image</h2>
          <img
            className='img-responsive'
            src="https://upload.wikimedia.org/wikipedia/commons/3/32/The_Panda_Eats_%283031446982%29.jpg"
          />
          <p>By DearEdward from New York, NY, USA (The Panda Eats) [<a href="http://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AThe_Panda_Eats_(3031446982).jpg">via Wikimedia Commons</a></p>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12'>
          <h2>Good Image</h2>
          <img
            alt="Panda eating bamboo"
            className='img-responsive'
            src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Giant_Panda_eating_Bamboo.JPG"
          />
          <p>By Manyman (Own work) [<a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AGiant_Panda_eating_Bamboo.JPG">via Wikimedia Commons</a></p>
        </div>
        <div className='col-xs-12'>
          <h2>Presentational Image</h2>
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Horizontal_rule_line_%28black-blue%29.gif"
          />
        </div>
        <div className='col-xs-12'>
          <h2>Good Image with Caption</h2>
          <figure>
            <img
              alt=""
              className='img-responsive'
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/Ailuropoda_melanoleuca_Schoenbrunn_07-2008.jpg"
            />
            <figcaption>Image of Panda Family Together</figcaption>
          </figure>
          <p>By Manfred Werner / Tsui (Own work) [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a> or <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>], <a href="https://commons.wikimedia.org/wiki/File%3AAiluropoda_melanoleuca_Schoenbrunn_07-2008.jpg">via Wikimedia Commons</a></p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Images />, document.getElementById('main'));

import React from 'react';
import ReactDOM from 'react-dom';
import './tables.css';

const Tables = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-12'>
          <h1 className='text-center'>Tables</h1>
        </div>
      </div>

      <div className='row'>
        <h2>Bad Table #1</h2>
        <table>
          <tr>
            <td>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at justo aliquam eros varius sagittis. Morbi non finibus libero. Praesent maximus ut enim sit amet semper. Donec nec eleifend felis. Phasellus tempus nibh justo, ut pulvinar nulla consequat in. Nullam iaculis tempor eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis congue enim, quis efficitur dolor. Pellentesque lacinia aliquam est. Nulla id commodo justo. Nam id pellentesque enim.</p>
            </td>
            <td>
              <a title='By 3steph14 (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons' href='https://commons.wikimedia.org/wiki/File%3ALorem_ipsum.jpg'><img width='256' alt='Lorem ipsum' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lorem_ipsum.jpg/256px-Lorem_ipsum.jpg'/></a>
            </td>
          </tr>
          <tr>
            <td>
              <p>Duis aliquam pellentesque fermentum. Donec congue, dui nec mattis efficitur, ex lorem porttitor libero, eu commodo risus orci in metus. In rutrum, magna id venenatis tristique, ante tortor pulvinar nulla, molestie dapibus mauris mauris et mauris. Vestibulum arcu elit, venenatis sit amet bibendum dictum, sollicitudin mattis quam. Mauris laoreet, ex dictum consectetur luctus, mi neque efficitur turpis, vitae mattis turpis diam eu urna. Duis vel orci lacinia, hendrerit nulla sed, fermentum tellus. Proin viverra est felis, et pulvinar lorem eleifend non. In facilisis molestie lectus imperdiet rutrum.</p>
            </td>
            <td>
              <p>Aenean rutrum, velit non efficitur bibendum, leo mi fringilla nulla, id vulputate est velit et sapien. Nunc eros ex, venenatis in mauris non, blandit condimentum erat. Etiam vitae metus vel lorem malesuada volutpat. Quisque egestas elit eget leo sagittis dignissim eget sed dui. Proin faucibus placerat neque, ac pretium quam feugiat eu. Maecenas sit amet tempor mauris. Nam ligula orci, tempor a velit quis, sagittis placerat odio.</p>
            </td>
          </tr>
        </table>
      </div>

      <div className='row'>
        <h2>Bad Table #2</h2>
        <table className='table table-bordered'>
          <tr>
            <th>Bug Type</th>
            <th># Bugs Found</th>
            <th># Bugs Fixed</th>
          </tr>
          <tr>
            <th>Legacy</th>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Beta</th>
            <td>5</td>
            <td>4</td>
          </tr>
        </table>
      </div>

      <div className='row'>
        <h2>Good Table #1</h2>
        <table className='table table-bordered'>
          <tr>
            <th scope='col'>Bug Type</th>
            <th scope='col'># Bugs Found</th>
            <th scope='col'># Bugs Fixed</th>
          </tr>
          <tr>
            <th scope='row'>Legacy</th>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope='row'>Beta</th>
            <td>5</td>
            <td>4</td>
          </tr>
        </table>
      </div>

      <div className='row'>
        <h2>Good "Table" #2</h2>
        <div role='grid' className='table'>
          <div role='row'>
            <div role='columnheader'>Bug Type</div>
            <div role='columnheader'># Bugs Found</div>
            <div role='columnheader'># Bugs Fixed</div>
          </div>
          <div role='row'>
            <div role='rowheader'>Legacy</div>
            <div role='gridcell'>10</div>
            <div role='gridcell'>5</div>
          </div>
          <div role='row'>
            <div role='rowheader'>Beta</div>
            <div role='gridcell'>5</div>
            <div role='gridcell'>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Tables />, document.getElementById('main'));

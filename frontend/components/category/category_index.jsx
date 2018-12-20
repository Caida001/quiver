import React from "react";
import { withRouter, Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class CategoryIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.requestAllCategories();
  }


  render() {

    if(this.props.categories.length > 0) {

      return(
        <div>

          <div class="dropdown-cate">
            <DropdownButton
              bsStyle={'primary'}
              title={'Categories'}
            >
              <MenuItem eventKey="1" href="#/categories">Categories</MenuItem>
              <MenuItem eventKey="2" href="#/channels">Live Channels</MenuItem>

            </DropdownButton>

          </div>


          <div className="category-index">

              {this.props.categories.map((category) => {
              return <li key={category.id} className="category-index-item">
                <Link to={`/categories/${category.id}`}>
                  <div className="category-item-image">
                    <img src={category.category_url} />
                  </div>

                  <p>{category.name}</p>


                </Link>
              </li>})}

          </div>

        </div>

      )
    } else {
      return <div>Loading...</div>;
    }

  }
}

export default withRouter(CategoryIndex);

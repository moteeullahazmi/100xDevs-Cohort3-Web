// You will rely on JavaScript features like for loop and the array map() function to render lists of components.

// For example, let’s say you have an array of products:

function RenderingLists(){
    const products = [
      { title: "Cabbage", id: 1 },
      { title: "Garlic", id: 2 },
      { title: "Apple", id: 3 },
    ];

    const listItems = products.map((product) => (
      <li key={product.id}>{product.title}</li>
    ));

    return <ul>{listItems}</ul>;

}

export default RenderingLists
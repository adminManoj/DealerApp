interface Item {
  id: number;
  value: number;
  checked: boolean;
}

interface ComponentProps {
  items: Item[];
  toggleItem: (item: Item) => void;
}

function Component(props: ComponentProps) {
  const { items, toggleItem } = props;
   const onChange = (e : React.ChangeEvent<HTMLInputElement>, item: Item) => {
        item.checked = e.target.checked;
        toggleItem(item);
    }
  return (
    <div>
      <h1>Items</h1>
     <ul style={{ listStyle: 'none' }}>
                    {
                        items && items.map((item, index) => {
                            return (
                                <li key={index} value={item.value}>
                                    <input type="checkbox" onChange={(e) => onChange(e, item)} checked={item.checked}/>
                                    {item.value}                                     
                                </li>
                            )
                        })
                    }
                </ul>
      <label>
        Sum or checked: {
                    items && items.filter(x => x.checked === true).reduce((acc, x) =>  acc + x.value , 0)
                }
      </label>
    </div>
  );
}

function App() {
  const [items, setItems] = React.useState<Item[]>([
    { id: 1, value: 1, checked: false },
    { id: 2, value: 2, checked: false },
    { id: 3, value: 3, checked: false },
    { id: 4, value: 10, checked: true }
  ]);

 const toggleItem = (item: Item) => {  
   const itemsCopy = Object.assign([], items);
    const index = itemsCopy.findIndex(x => x.id === item.id);
    if (item.checked === true) {
      itemsCopy[index].checked = true;
    }
    else {
      itemsCopy[index].checked = false;
    }
   
    setItems(itemsCopy));
  };


  return (
    <>
      <Component items={items} toggleItem={toggleItem} />
      <div class="screehshot">
        <h2>Screenshot of desired result</h2>
        <img src="data:image/png;base64,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" />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import "./App.scss";
import { Card } from './Components/Card';
import { useState } from "react";

function validateColorName(name) {
  name = name.trim();
  if (name.length < 3) {
    return false;
  } else if (name.length > 150) {
    return false;
  }
  return true;
}

function validateHexColor(hexColor) {
  hexColor = hexColor.trim();
  const hexColorPattern = /^[#]{1}[0-9abcdef]{6}$/;
  if (hexColor.length !== 7) {
    return false;
  } else {
    return hexColorPattern.test(hexColor);
  }
}

function App() {
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [error, setError] = useState(false);

  function addColor(event) {
    event.preventDefault();
    const newColor = {
      hex: colorHex.trim(),
      name: colorName.trim()
    };
    if (validateHexColor(colorHex) && validateColorName(colorName)) {
      setFavoriteColors([...favoriteColors, newColor]);
      setColorHex('');
      setColorName('');
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="App">
      <h1>Adicionar nova cor</h1>
      <form onSubmit={event => addColor(event)} className={error ? 'error' : null}>
        <label htmlFor="colorName">Nome da cor</label>
        <input id="colorName" type="text" placeholder="Digite o nome da cor." value={colorName} onChange={event => setColorName(event.target.value)} />
        <label htmlFor="colorHex">Cor</label>
        <input id="colorHex" type="text" placeholder="Digite a cor com formato hexadecimal (#ffffff)" value={colorHex} onChange={event => setColorHex(event.target.value)} />
        <button type='submit'>Salvar</button>
        {
          error ? <span>Eita, verifique os dados inseridos no formulário</span> : null
        }
      </form>
      <h2>Cores Favoritas</h2>
      <div>
        {
          favoriteColors.map((colorItem, index) => (<Card color={colorItem} key={index} />))
        }
      </div>
    </div>
  )
}

export default App;

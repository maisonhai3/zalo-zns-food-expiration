function inputFoodForm() {
    const [foodName, setFoodName] = useState('');
    const [hanSuDung, setHanSuDung] = useState('');
    const [sdt, setSdt] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      foodList = [
        ...foodList,
        {
          foodName,
          hanSuDung,
          sdt,
        },
      ];
      setFoodName('');
      setHanSuDung('');
      setSdt('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                Food Name:
              </label>
            </td>
            <td>
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Expiration Date:
              </label>
            </td>
            <td>
              <input
                type="date"
                value={hanSuDung}
                onChange={(e) => setHanSuDung(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Phone Number:
              </label>
            </td>
            <td>
              <input
                type="text"
                value={sdt}
                onChange={(e) => setSdt(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    );
  }

  export default inputFoodForm;
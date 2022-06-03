import './styles.css';

const SalesTable = () => {
  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#100</td>
            <td>01/05/2018</td>
            <td>Masculino</td>
            <td>Roupas e Acessórios</td>
            <td>Brasília</td>
            <td>Crédito</td>
            <td>R$ 6.000,00</td>
          </tr>
          <tr>
            <td>#100</td>
            <td>01/05/2018</td>
            <td>Masculino</td>
            <td>Roupas e Acessórios</td>
            <td>Brasília</td>
            <td>Crédito</td>
            <td>R$ 6.000,00</td>
          </tr>
          <tr>
            <td>#100</td>
            <td>01/05/2018</td>
            <td>Masculino</td>
            <td>Roupas e Acessórios</td>
            <td>Brasília</td>
            <td>Crédito</td>
            <td>R$ 6.000,00</td>
          </tr>
          <tr>
            <td>#100</td>
            <td>01/05/2018</td>
            <td>Masculino</td>
            <td>Roupas e Acessórios</td>
            <td>Brasília</td>
            <td>Crédito</td>
            <td>R$ 6.000,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;

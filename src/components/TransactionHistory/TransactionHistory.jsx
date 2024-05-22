import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <>
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td> {type}</td>
            <td> {amount}</td>
            <td> {currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default TransactionHistory;


Этот код представляет компонент TransactionHistory, который отображает историю транзакций в виде таблицы. Вот его основные части:

    import css from './TransactionHistory.module.css'; - Эта строка импортирует стили для компонента из файла TransactionHistory.module.css.

const TransactionHistory = ({ items }) => (-
  Это объявление компонента TransactionHistory, который принимает пропс items, представляющий массив объектов с информацией о транзакциях.

<table className={css.transactionTable}> -
  Этот код создает HTML таблицу с классом css.transactionTable, который определен в модульных стилях.

    <thead>...</thead> - Этот код создает заголовок таблицы, в котором определены заголовки столбцов: "Type", "Amount" и "Currency".

  <tbody>...</tbody> - Этот код создает тело таблицы, в котором содержится информация о транзакциях. Для каждой транзакции создается строка таблицы (<tr>),
    а внутри нее ячейки с информацией о типе транзакции, сумме и валюте.

    {items.map(({ id, type, amount, currency }) => (-
      Этот код использует метод map для преобразования массива items в массив JSX элементов.Для каждого элемента массива создается строка таблицы с данными о транзакции.

    </table> - Закрытие тега таблицы.

    export default TransactionHistory; - Экспорт компонента TransactionHistory для использования в других частях приложения.

Этот компонент отображает историю транзакций в виде таблицы, где каждая строка представляет собой одну транзакцию, а столбцы содержат информацию о типе транзакции, сумме и валюте.
console.log('bobbyhadz.com');

function toObject(table) {
  const thead = Array.from(table.tHead.rows[0].children).map(
    el => el.textContent,
  );

  const tbody = Array.from(table.tBodies[0].rows).map(row =>
    Array.from(row.cells).map(cell => cell.textContent),
  );

  return {
    table: [thead].concat(tbody),
    thead,
    tbody,
  };
}

const table = document.getElementById('my-table');

const obj = toObject(table);

// 👇️ [['Col 1','Col 2','Col 3'],['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]
console.log(obj.table);

// 👇️ ['Col 1', 'Col 2', 'Col 3']
console.log(obj.thead);

// [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]
console.log(obj.tbody);

const jsonStr = JSON.stringify(obj.table);
// [["Col 1","Col 2","Col 3"],["A1","A2","A3"],["B1","B2","B3"],["C1","C2","C3"]]
console.log(jsonStr);

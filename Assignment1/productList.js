var input = 'foo';

(function() {

    var output = input;
    console.log(output);

    console.log(window.output);


    var mockDatabase = [
        { _id: '94', price: $2, name: 'Chocolate Chip', published: true },
        { _id: '13', price: $2, name: 'Oatmeal Raisin', published: true },
        { _id: '5', price: $2, name: 'Sugar', published: true },
        { _id: '694', price: $3, name: 'Double Chocolate Chip', published: false },
        { _id: '36', price: $3, name: 'Red Velvet', published: false },
    ];

    function renderList(results) {
        var tableBody = document.querySelector('#results-table tbody');


        tableBody.innerHTML = '';

        var tableRows = results.map(function(result, index) {
            return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' +
                result._id + '</td><td>' + result.published + '</td></tr>';
        });

        tableRows.forEach(function(row) {
            tableBody.innerHTML += row;
        });


        var foo = 'renderList';
        console.log(output);
    }

    renderList(mockDatabase);


    function orderBy(sortValue) {

        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function(a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function(a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event) {
        orderBy(event.target.value);
    });


    function togglePublished(showPublished) {
        var filteredResults = mockDatabase.filter(function(result) {
            return showPublished || result.published;
        });
        renderList(filteredResults);
    }

    document.querySelector('#published').addEventListener('change', function(event) {
        var value = event.target.value === 'true';
        togglePublished(value);
    });
})();
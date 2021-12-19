$(function () {

    $('#extraction-form').on('submit', function (event) {
        event.preventDefault();

        var inp = $('#extraction-input');
        alert('Hold on! Extracting the GloVe Vector')
        $.ajax({
            url: '/extraction',
            method: 'POST',
            data: {
                'word1': inp[0].value,
            },
            success: function (response) {
                var out = response.name;
                $('#output1').html(out);
            }
        })
    });

    $('#sim-form').on('submit', function (event) {
        event.preventDefault();

        var inp1 = $('#sim1-input');
        var inp2 = $('#sim2-input');
        alert('Hold on! Calculating the Similarity')
        $.ajax({
            url: '/similarity',
            method: 'POST',
            data: {
                'word1': inp1[0].value,
                'word2': inp2[0].value,
            },
            success: function (response) {
                var out = response.name;
                $('#output2').html(out);
            }
        })
    });

    $('#wa-form').on('submit', function (event) {
        event.preventDefault();

        var inp1 = $('#wa1-input');
        var inp2 = $('#wa2-input');
        var inp3 = $('#wa3-input');
        alert('Hold on! Computing the Word Analogy')
        $.ajax({
            url: '/word_analogy',
            method: 'POST',
            data: {
                'word1': inp1[0].value,
                'word2': inp2[0].value,
                'word3': inp3[0].value,
            },
            success: function (response) {
                var out = response.name;
                $('#output3').html(out);
            }
        })
    });


    $('#vis-form').on('submit', function (event) {
        event.preventDefault();

        var inp1 = $('#vis1-input');
        alert('Hold on! Creating a plot')
        $.ajax({
            url: '/visualization',
            method: 'POST',
            data: {
                'word1': inp1[0].value,
            },
            success: function (response) {
                var dr_data = response.dr_data;
                var words = response.words;
                glove_vis(dr_data, words);
            }
        })
    });
});

function glove_vis(dr_data, words) {

    X = []
    Y = []
    for (let i = 0; i < dr_data.length; i++) {
        X.push(dr_data[i][0]);
        Y.push(dr_data[i][1]);
    }

    var trace1 = {
        x: X,
        y: Y,
        mode: 'markers+text',
        type: 'scatter',
        text: words,
        textposition: 'top center',
        textfont: {
            family: 'Raleway, sans-serif'
        },
        marker: { size: 10 }
    };

    var plot_data = [trace1];

    var layout = {
        xaxis: {
            title: {
                text: 'X',
            }
        },
        yaxis: {
            title: {
                text: 'Y',
            }
        },
        title:'GloVe Visual Representation'
    };

    Plotly.newPlot('output4', plot_data, layout);
}
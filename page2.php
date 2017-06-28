<?php
include("header.php")
?>


<img class="amp" src="/static/img/ampoulerouge.png" alt="">
<img class="amp" src="/static/img/ampolejaune.png" alt="">
<img class="amp" src="/static/img/ampouleorange.png" alt="">
<img class="amp" src="/static/img/ampouleverte.png" alt="">
<h3 class="titre">Ville de Mende</h3>
<table class="table table-striped table-bordered">
	<h4>Production/consommation mensuelle de la ville de Mende en 2016</h4>
	<thead>
		<tr class="months">
            <td>Mois :</td>
		</tr>
	</thead>
	<tbody>
		<tr class="conso2016">
			<td>Consommation (MWH)</td>
		</tr>
		<tr class="prod2016">
			<td>Production (MWH)</td>
		</tr>
		<tr class="tempmax2016">
			<td>Température Maxi</td>
		</tr>
		<tr class="tempmin2016">
			<td>Température Mini</td>
		</tr>
	</tbody>
</table>
<table class="table table-striped table-bordered">
	<h4>Production/consommation mensuelle de la ville de Mende en 2015</h4>
	<thead>
		<tr class="months">
            <td>Mois :</td>
		</tr>
	</thead>
	<tbody>
		<tr class="conso2015">
			<td>Consommation (MWH)</td>
		</tr>
		<tr class="prod2015">
			<td>Production (MWH)</td>
		</tr>
		<tr class="tempmax2015">
			<td>Température Maxi</td>
		</tr>
		<tr class="tempmin2015">
			<td>Température Mini</td>
		</tr>
	</tbody>
</table>
<script type="text/javascript">
    $(document).ready(function() {
        var monthsRow = $(".months");
        var conso2016 = $(".conso2016");
        var prod2016 = $(".prod2016");
        var conso2015 = $(".conso2015");
        var prod2015 = $(".prod2015");
        var tempMax2016 = $(".tempmax2016");
        var tempMin2016 = $(".tempmin2016");
        var tempMax2015 = $(".tempmax2015");
        var tempMin2015 = $(".tempmin2015");
        $.getJSON('./static/fakedata.json', function(data) {
            console.log(data.conso_mensuelle_2016.janvier);
                for (var month in data.conso_mensuelle_2016) {
                    monthsRow.append("<td>"+month+"</td>");
                    conso2016.append("<td>"+ data.conso_mensuelle_2016[month] +"</td>")
                }
                for (var month in data.prod_mensuelle_2016) {
                    prod2016.append("<td>"+data.prod_mensuelle_2016[month]+"</td>")
                }
                for (var month in data.temp_mois_2016) {
                    console.log(data.temp_mois_2016[month].max);
                    tempMax2016.append('<td>'+ data.temp_mois_2016[month].max +'</td>');
                    tempMin2016.append('<td>'+ data.temp_mois_2016[month].min +'</td>');
                }

                for (var month in data.conso_mensuelle_2015) {
                    conso2015.append("<td>"+ data.conso_mensuelle_2015[month] +"</td>")
                }
                for (var month in data.prod_mensuelle_2015) {
                    prod2015.append("<td>"+data.prod_mensuelle_2015[month]+"</td>")
                }
                for (var month in data.temp_mois_2015) {
                    console.log(data.temp_mois_2015[month].max);
                    tempMax2015.append('<td>'+ data.temp_mois_2015[month].max +'</td>');
                    tempMin2015.append('<td>'+ data.temp_mois_2015[month].min +'</td>');
                }
        });
    });
</script>
<?php
include("footer.php")
?>

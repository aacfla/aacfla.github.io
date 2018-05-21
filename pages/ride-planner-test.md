---
title: Ride Planner Signup
permalink: /ride-planner-test
---

<head>
<link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
</head>





<form class="pure-form pure-form-aligned" name="rides"  method="post" action="#">
        
<div class="pure-control-group">
<label for="email">Email</label>
<input type="email" name="email">
</div>


<div class="pure-control-group">
<label for="name">Name</label>
<input type="text" name="name">
</div>

<div class="pure-control-group">
<label for="year">Year</label>
<select name="year">
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
    <option value="other">other</option>
</select>
</div>

<div class="pure-control-group">
<label for="phone">Phone</label>
<input type="tel" name="phone">
</div>

<div class="pure-control-group">
<label for="church">Church</label>
<select name="church">
	<option value="CCAC">CCAC</option>
	<option value="LH">Lighthouse</option>
	<option value="IBC">IBC</option>
</select>
</div>

<div class="pure-control-group">
<label for="Attendance">Attending?</label>
<select name="Attendance">
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select>
</div>

<div class="pure-control-group">
<label for="Driving">Can You Drive?</label>
<select name="Driving">
	<option value="Yes">Yes</option>
	<option value="No">No</option>
</select>
</div>

<div class="pure-control-group">
<label for="Seats">Number of Seats?</label>
    <input type="numSeats" name="numSeats">
</div>


<div class="pure-control-group">
<label for="Notes">Extra Notes</label>
    <input type="Notes" name="Notes">
    
</div>

<div class="pure-controls">
            <label for="cb" class="pure-checkbox">
                <input id="cb" type="checkbox"> I've filled in the fields accurately
            </label>
<input type="submit" class="pure-button pure-button-primary">
</div>


<div class="pure-control-group">

</div>





</form>








<script type="text/javascript" src="assets/js/rides.js"></script>
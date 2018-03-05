function OpenWindow() {

	var url = $('#url').val();
	var key = $('#key').val();
	
	var newUrl = url.replace(/%7b(.)*%7d/,'%7b' + key + '%7d');
	
	window.open(newUrl);
	
}

function getval(sel)
{
	var url = '';
	
	if (sel.value == 1){
		url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10273&extraqs=&histKey=274890632&id=%7b39A48256-6755-46CB-8069-4BE63AED6580%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Applicaiton#328751439';
	}
	if (sel.value == 2){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=2&extraqs=&histKey=321306206&id=%7bD1AA5694-6FB3-46B9-B81A-5C2689FEA776%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cCustomers%7cnav_conts#330031496';
		
	}
	if (sel.value == 3){
		var url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10342&extraqs=&histKey=545945145&id=%7bB94FDA42-061E-E811-811F-70106FAA6A11%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cSFA%7csra_attribute#247818795';
	}
	
	$('#url').val(url);
}


window.onload = function () {
	 url = 'https://sra-qa3.crm11.dynamics.com/main.aspx?etc=10273&extraqs=&histKey=274890632&id=%7b39A48256-6755-46CB-8069-4BE63AED6580%7d&newWindow=true&pagetype=entityrecord&sitemappath=SFA%7cMyWork%7cSubArea_Applicaiton#328751439';
	 
	 $('#url').val(url);
};

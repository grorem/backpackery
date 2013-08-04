

$(document).ready(function() {


	$('ul.misc').children('li:nth-child(1)').click('li', function(){
											
		$('p.itemText').text('moooore stuffff about baccckkkkpaccccckkkkkkssss');
											
		var src = 'image/hillary.png';

		this.img = $('<img/>', { 'src': src } );
		this.img.prependTo('p.itemText');                         // add to DOM
		this.img.load(function(self){return function(){    // when loaded call function
													
		}; }(this) ); 
									
	})();




								
	$('ul.misc').children('li:nth-child(2)').click('li', function(){
											
		$('p.itemText').text('boooooots are really important because without boots, you would be hurting with feet without boots. yes, boots');
											
		var src = 'image/wknd.png';

		this.img = $('<img/>', { 'src': src } );
		this.img.prependTo('p.itemText');                         // add to DOM
		this.img.load(function(self){return function(){    // when loaded call function
													
		}; }(this) ); 
									
	})();


		$('ul.misc').children('li:nth-child(3)').click('li', function(){
											
			$('p.itemText').text('A tent, or a biv, up to you and your group and fun and backpacking and tents.');
												
			var src = 'image/ted.png';

			this.img = $('<img/>', { 'src': src } );
			this.img.prependTo('p.itemText');                         // add to DOM
			this.img.load(function(self){return function(){    // when loaded call function
														
			}; }(this) ); 
									
		})();
		
		
		
});		
		
		$('ul.nav').children('li:nth-child(1)').click('li', function(){
											
											$('p.itemText').text('compasssssssss')
									
									})();
									
									
									
									
});									
									
									
									

									
									
									
									
								

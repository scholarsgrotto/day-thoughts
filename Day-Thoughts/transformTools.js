/*
Script for making dynamic transformations between the Quarto and Octavo editions of Day Thoughts.
Created by Daniel J. Johnson, http://scholarsgrotto.com
*/

$(document).ready(function(){

	<!-- Define a variable for the base and alternate texts -->  
	var baseText = "quarto";
	var altText = "octavo";
	
	<!-- Clear the octavo page number, octavo page break line, and the "all changes" options -->
	$(".octavoPage").css({"position":"absolute","display":"none"});
	$(".octavoPageBreak").css({"text-decoration":"none"});
	$(".quartoPageBreak").css({"text-decoration":""}); <!--This is necessary for entering a line back in when quarto and octavo share a page break -->
	$(".quarto_changes").css({"position":"absolute","display":"none"});
	$(".octavo_changes").css({"position":"absolute","display":"none"});
	
	<!-- Define a function for resetting the toolbox CSS -->
	function clearCSS() {
	
		$(".octavo").removeAttr('style'); 
		$(".quarto").removeAttr('style'); 
		$(".octavo").css({"position":"absolute","display":"none"});
		$(".quarto").css({"position":"absolute","display":"none"});
		$(".octavoPage").removeAttr('style'); 
		$(".quartoPage").removeAttr('style'); 
		$(".octavoPage").css({"position":"absolute","display":"none"});
		$(".quartoPage").css({"position":"absolute","display":"none"});
		$(".quartoPageBreak").css({"text-decoration":"none"});
		$(".octavoPageBreak").css({"text-decoration":"none"});
		
		$('.highlightedStyle').removeClass('highlightedStyle');
		$('.discardedStyle').removeClass('discardedStyle');
		
		$(".inflectional").css({"position":"absolute","display":"none"});
		$(".orthographic").css({"position":"absolute","display":"none"});
		$(".punct").css({"position":"absolute","display":"none"});
		$(".subst").css({"position":"absolute","display":"none"});
		
		$(".quarto_changes").removeAttr('style'); 
		$(".octavo_changes").removeAttr('style'); 
		$(".quarto_changes").css({"position":"absolute","display":"none"});
		$(".octavo_changes").css({"position":"absolute","display":"none"});
		 
	}
	
	<!-- Define a function for styling the different transformations -->
	function stylingCSS(stylingVar) {
		
		<!-- For some reason, it doesn't like my position and float changes in the CSS file styles -->
		$("." + stylingVar).css({"position":"relative","display":"inline"});
		$("." + altText).css({"float":"right"});
		
											
		 <!-- New way with style. -->
		$("." + stylingVar).addClass('highlightedStyle');
		$("." + altText).addClass('discardedStyle');
	
	}
									
									
	 $('input:radio[name="whichText"]').change(
	 function(){
		  
			<!-- Clear the attributes -->
			clearCSS();
			
			<!-- Select the "none" option on the Transformations radio buttons -->
			$('input:radio[name=whichChange]')[0].checked = true;

			if ($(this).val() == 'octavo') {
			
				$(".octavo").css({"position":"relative","display":"inline"});
				$(".octavoPage").css({"position":"relative","display":"inline"});
				$(".octavoPageBreak").css({"text-decoration":""});
				altText = "quarto";
			
			}
			
			if ($(this).val() == 'quarto') {
			
				$(".quarto").css({"position":"relative","display":"inline"}); 
				$(".quartoPage").css({"position":"relative","display":"inline"});
				$(".quartoPageBreak").css({"text-decoration":""});
				altText = "octavo";
			
			}
			
		  <!-- Set the base text for transformations --> 
		  baseText = $(this).val();
		  
	 });
	 
	 
	 $('input:radio[name="whichChange"]').change(
	 function(){
	 
		 <!-- First clear the attributes -->
		 clearCSS();
		 
		 <!-- Set up the base text and its page number -->
		 $("." + baseText).css({"position":"relative","display":"inline"});
		 $("." + baseText + "Page").css({"position":"relative","display":"inline"});
		 $("." + baseText + "PageBreak").css({"text-decoration":""});
		 
		 <!-- Do the transformation styling -->
		 if ($(this).val() != 'all') {
		 
			stylingCSS($(this).val());
		 
		 } else {
		 
			<!-- Special styling instructions for "all changes" -->
		   
			 $("." + baseText).css({"position":"relative","display":"inline"});
			 $("." + baseText).addClass('highlightedStyle');
			
			$("." + altText + "_changes").css({"position":"relative","display":"inline","float":"right","font-size":"75%"});
			 
			 $("." + altText + "_changes").addClass('highlightedStyle');
			  
		 
		 }
	 
	 });
	 

});
<?php
/*
 Template Name: Home
*/
?>

<?php get_header(); ?>

<div id="content" class="wp">
	<main id="main" class="" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/WebPageElement">
	<?php 
	// HMPG PRTS TPL Start
	get_template_part('components/banner-static/option-4/banner-base');
	get_template_part('components/inv-search-bar/option-1/inv-search-base');
	get_template_part('components/ctas/option-2/ctas-base');
	get_template_part('components/cta-banner/option-cust/cust-banner-base');
	// HMPG PRTS TPL End 
	?>
	</main>
</div>

<?php get_footer(); ?>
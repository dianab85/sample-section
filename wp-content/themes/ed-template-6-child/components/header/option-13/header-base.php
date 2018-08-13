<!-- Header -->
<header class="wp" role="banner" itemscope itemtype="http://schema.org/WPHeader">
	<div class="sect-1 cf">
		<div class="wrap cf">			
			<?php get_template_part('components/header/option-13/contact-list'); ?>
			<?php get_template_part('components/header/common/logo-sect'); ?>
			<?php get_template_part('components/header/option-13/secondary-menu'); ?>
			<div class="mobilemenu-sect">
				<div class="nav-button">
					<span class="line1"></span>
					<span class="line2"></span>
					<span class="line3"></span>
				</div>
			</div>
			<div class="center-menu cf">
				<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<?php
					$vehicle_array = get_option('ed_wp_options_vehicle_ctas');
					if(!empty($vehicle_array['vehicle_one']['title'])){
					?>
					<ul>
						<?php foreach ($vehicle_array as $vehicle) {
							if(!empty($vehicle['title'])){ ?>
								<li><a href="<?= $vehicle['main_link']; ?>"><?= $vehicle['title']; ?></a></li>
							<?php } ?>
						<?php } ?>
					</ul>
					<?php } ?>
				</nav>
			</div> 
            <div class="contact-us-wrap">
                <a class="btn" href="#">
                    <i class="icon-user"></i>
                    <span>Contact Us</span>
                </a>
				<div class="drop-down">
					<?php if(get_option('ed_address')): ?>
					<section class="address-sect">
						<div class="icon-wrap">
							<i class="icon-map-pin-1"></i>
						</div>	
						<span><?php echo get_option('ed_address'); ?></span>
						<a href="<?php if(get_option('ed_googlemaplink')){echo get_option('ed_googlemaplink');} ?>" class="link link-gray click-getdirections-sent">Get Directions <i class="icon-navigation-icons-14"></i></a>
					</section>
					<?php endif; ?>				
					<section class="tels-sect">
						<div class="icon-wrap">
							<i class="icon-phone"></i>	
						</div>						
						<ul class="tels-sect__list">
							<?php if(get_option('ed_phone1')): ?>
							<li>
								<a class="link" href="tel:<?php echo phone_num_formatter(get_option('ed_phone1'), 'link'); ?>">
									<?php if(get_option('ed_phone1label')): ?>
										<span class="label"><?php echo get_option('ed_phone1label'); ?></span>
									<?php endif; ?>
									<span class="num"><?php echo phone_num_formatter(get_option('ed_phone1')); ?></span>
								</a>
							</li>
							<?php endif; ?>
							<?php if(get_option('ed_phone2')): ?>
							<li>
								<a class="link" href="tel:<?php echo phone_num_formatter(get_option('ed_phone2'), 'link'); ?>">
									<?php if(get_option('ed_phone2label')): ?>
										<span class="label"><?php echo get_option('ed_phone2label'); ?></span>
									<?php endif; ?>
									<span class="num"><?php echo phone_num_formatter(get_option('ed_phone2')); ?></span>
								</a>
							</li>
							<?php endif; ?>
							<?php if(get_option('ed_phone3')): ?>
							<li>
								<a class="link" href="tel:<?php echo phone_num_formatter(get_option('ed_phone3'), 'link'); ?>">
									<?php if(get_option('ed_phone3label')): ?>
										<span class="label"><?php echo get_option('ed_phone3label'); ?></span>
									<?php endif; ?>
									<span class="num"><?php echo phone_num_formatter(get_option('ed_phone3')); ?></span>
								</a>
							</li>
							<?php endif; ?>
						</ul>
					</section>
				</div>
            </div>
		</div>
	</div>
	<?php 
	if(shortcode_exists('ed-mega-menu')){
		do_shortcode( '[ed-mega-menu]' ); 
	}?>
</header>
<!-- Header End -->
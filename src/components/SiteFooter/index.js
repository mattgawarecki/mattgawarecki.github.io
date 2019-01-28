import React from 'react';

const SiteFooter = props => (
	<footer className={props.className}>
		<p>&copy; 2019 Matt Gawarecki</p>
		<p>
			Visual styling inspired by <a rel="external" href="https://github.com/alexandrevicenzi/">Alexandre Vicenzi</a>'s <a rel="external" href="https://github.com/alexandrevicenzi/flex/">Flex</a> theme for Pelican.
		</p>
		<p>
			This site's content is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
				Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
			</a>.
		</p>
		
		<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
			<img
				src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
				alt="The logo for the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International license"
			/>
		</a>
  </footer>
);

export default SiteFooter;
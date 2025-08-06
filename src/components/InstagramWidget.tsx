// src/components/InstagramWidget.tsx
import React, { useEffect, useRef } from 'react';

const InstagramWidget = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.innerHTML = `
        <iframe 
          src="https://snapwidget.com/embed/1101401"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style="border:none; overflow:hidden; width:100%; min-height:600px;"
        ></iframe>
      `;
		}
	}, []);

	return <div ref={ref} />;
};

export default InstagramWidget;

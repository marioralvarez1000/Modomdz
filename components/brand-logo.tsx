export function BrandLogo({compact=false}:{compact?:boolean}) {
  return <span className={`brand-lockup ${compact?"compact":""}`} aria-hidden="true">
    <svg className="brand-symbol" viewBox="0 0 48 48" role="img">
      <path className="symbol-ground" d="M6 8.5A5.5 5.5 0 0 1 11.5 3h25A5.5 5.5 0 0 1 42 8.5v25a5.5 5.5 0 0 1-5.5 5.5H28l-4 6-4-6h-8.5A5.5 5.5 0 0 1 6 33.5z"/>
      <path className="symbol-route" d="M12.5 29.5 20 17l5.2 8.1L29 19l6.5 10.5"/>
      <circle className="symbol-sun" cx="34.5" cy="12.5" r="3.5"/>
    </svg>
    {!compact&&<span className="brand-word"><strong>MODO</strong><b>MZA</b></span>}
  </span>;
}

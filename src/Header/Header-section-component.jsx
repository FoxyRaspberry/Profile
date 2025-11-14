import './Header-section-component.css'

export function Header () {
  return (
    <>
      <div className='header-section'>
        <div className='wrapper'>
          <div className='header-section__item-container'>
            <div className='header-section-logo-container'>
              <h1 className='header-section-logo'>Lisichkina</h1>
            </div>
            <div className='header-section__language-container'>
              <a className='header-section__language'>EN|RU</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Footer() {
    const hour = new Date().getHours();
    const openHours = 8;
    const closeHours = 22;
    const isOpen = hour >= openHours && hour < closeHours;
    return (
        <footer className="footer">
            {isOpen ? 
            <div className="order">
            <p>We are open untile {closeHours}:00. Come visit us or order online.</p>
                <button className="btn">Order</button>
            </div> : <p>We are happy to welcome you between {openHours}:00 and {closeHours}:00</p>
            }
        </footer>
    )
  }
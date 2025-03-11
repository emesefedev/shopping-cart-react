import LinkWithBorder from "./LinkWithBorder"

export default function SuccessfulPurchase() {
  
    return (
      <div className="p-8">
        <h1 className="mb-8">Successful Purchase</h1>

        <div className="flex flex-col gap-5">
          <p>Your purchase has been successfully completed!</p>

          <LinkWithBorder to="/">Find Products</LinkWithBorder>
        </div>
      </div>
    )
  }
  
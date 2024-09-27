import { Card } from "@repo/ui/card";

export const p2pTransactionCard = ({
    transaction
}: any) => {
    if(!transaction.length){
        return <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">
            No Recent p2p transactions
        </div>
      </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transaction.map((t: any) => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}          
        </div>
    </Card>
}
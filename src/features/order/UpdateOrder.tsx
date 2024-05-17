import Button from "../../ui/Button";
import { Params, useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = () => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="POST">
      <Button type="primary">Make Priority </Button>
    </fetcher.Form>
  );
};
export async function action({ params }: { params: Params<"orderId"> }) {
  const data = { priority: true };
  await updateOrder(params.orderId as string, data);
  return null;
}
export default UpdateOrder;

import { LoaderFunctionArgs } from "react-router-dom";

export function loader({ params }: LoaderFunctionArgs) {
  const cuttentEmployeeId = params.id?.slice(1) ?? '';
  return cuttentEmployeeId;
}

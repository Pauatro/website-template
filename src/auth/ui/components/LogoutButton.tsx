import type { FC } from "react";
import { Button } from "../../../shared/ui/components/Button";
import { authTokenStore } from "../../application/hooks/authTokenStore";

export const LogoutButton: FC = () => {
  const { resetAuthToken } = authTokenStore();

  return (
    <Button className="pb-2" onClick={resetAuthToken}>
      Logout
    </Button>
  );
};

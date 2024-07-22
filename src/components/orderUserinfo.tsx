import { Dispatch, SetStateAction } from "react";
import { useGetUserQuery } from "../../generated";

export const UserInfo = ({
  userId,
  SetUsername,
}: {
  userId: string;
  SetUsername: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const { data, loading, error } = useGetUserQuery({
    variables: {
      getUserId: userId,
    },
  });
  SetUsername(data?.getUser.name);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        overflow: "scroll",
        height: "2vh",
      }}
    >
      <div>
        <h1>{data?.getUser.name}</h1>
      </div>

      <div>
        <h1>{data?.getUser.email}</h1>
      </div>
    </div>
  );
};

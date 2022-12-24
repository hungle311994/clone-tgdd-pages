import React from "react";
import { Button } from "reactstrap";

const FormAccountItem = (props) => {
  const { accountList, onHandleShowModalEditAccount } = props;

  const handleEdit = () => {
    onHandleShowModalEditAccount();
  };

  return (
    <tbody>
      {accountList.map((accountItem, idx) => (
        <tr key={idx}>
          <th>{accountItem.id}</th>
          <td>{accountItem.email}</td>
          <td>{accountItem.username}</td>
          <td>{accountItem.fullname}</td>
          <td>
            <img
              src={require(`../../assets/account/${accountItem.avatarImageName}`)}
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "100rem",
              }}
              alt=""
            />
          </td>
          <td>{accountItem.mobile}</td>
          <td>{accountItem.address}</td>
          <td>{accountItem.createDate}</td>
          <td>{accountItem.active}</td>
          <td>
            {/* Edit Btn */}
            <Button
              color="success"
              outline
              onClick={() => handleEdit(accountItem)}
            >
              <span>
                <ion-icon name="pencil-outline"></ion-icon>
              </span>
            </Button>
          </td>
          <td>
            {/* Delete Btn */}
            <Button color="warning" outline>
              <span>
                <ion-icon name="trash-outline"></ion-icon>
              </span>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default FormAccountItem;

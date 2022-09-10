import { tezos } from "./tezos";

export const writing_pet_operation = async (title,desc) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1D7hiJZbMvVbQ5mB8SCHb2hR6f2Bv6vrpE");
    const op = await contractInstance.methods.writing_pet(desc,title).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
}; 

export const signing_pet_operation = async (number) => {
  try {
    const contractInstance = await tezos.wallet.at("KT1D7hiJZbMvVbQ5mB8SCHb2hR6f2Bv6vrpE");
    const op = await contractInstance.methods.signature(number).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
}; 
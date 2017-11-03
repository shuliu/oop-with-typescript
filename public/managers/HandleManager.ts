
export class HandleManager {
  switch (theDestination)
  {
    case ToCompress:
      DoCompressFile();
    break;
    case ToEncode:
      DoEncodeFile();
    break;
    case ToDatabase :
      SaveToDatabase();
    break;
    case ToDirectory :
      SaveToSpecificDirectory();
    break;
  }

}
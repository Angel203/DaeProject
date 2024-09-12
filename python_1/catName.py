# femaleCat = ['Jesi', 'Adore', 'Sailor', 'Minako']
# maleCat = ['Chito', 'Chico', 'jire', 'Jace']
# gender1 = 'femalCat'
# gender2 = 'maleCat'

# # age = 35 int Datatype 
# # name = "Angel"  string
# # otherName = 'Mari'

# # GAS_PRICE = 3.99 constant(all caps)

# # print( maleCat) 

# if gender1 == femaleCat:
#     print(femaleCat)
# elif gender2 == maleCat:
#     print(maleCat)
# else:
#     print("Try entering again.")


# Asking the user to input the cat gender.
import random 

  #list of names of cats  
femaleCat = ["Jesi", "Adore", "Sailor", "Minako", "luna"]
maleCat = ["Chito", "Chico", "Jire", "Jace", "Max"]
# this is a function that generate random cat names based on there gender.
def generate_cat_name(gender, available_names):

 # Check if there are available names
    if available_names: 
        name = random.choice(available_names)
        available_names.remove(name)  # Remove the name that is chosen to avoid from printing repeats
        return name
    else:
        print("All names have been used. Resetting the list.")
        return None  # this will indicate the name list is empty

# Asking for the cat's gender only once
while True:
    cat_gender = input("Enter the gender of your cat (male or female): ").lower()

    if cat_gender in ["male", "female"]:
        break  #  If valid input, exit the loop
    else:
        print("Invalid input! Please enter 'male' or 'female'.")

# Initialize the appropriate name list based on gender
available_names = maleCat if cat_gender == "male" else femaleCat

# Loop for name generation
while True:
    # this will Generate a name only if available names exist
    if available_names:
        cat_name = generate_cat_name(cat_gender, available_names)
        print(f"Your {cat_gender} cat's name is: {cat_name}")
    else:
        # Reset the list if all names have been used
        if cat_gender == "male":
            available_names = ["Chito", "Chico", "Jire", "Jace", "Max"]
        else:
            available_names = ["Jesi", "Adore", "Sailor", "Minako", "luna"]

    # Ask if the user wants to generate another name
    another_name = input("Do you want to generate another name? (yes/no): ").lower()
    # if the user input no
    if another_name != "yes":
        print("Thank you for using the cat name generator!")
        break
    
    # name_counter = 0



    